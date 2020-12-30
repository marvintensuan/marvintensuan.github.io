import psycopg2
from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
import pandas as pd
import json

print("\nUpdating database... Please make sure that Cloud SQL Proxy is running.\n\n")

# Load environment variables
load_dotenv()

DB_USER = os.getenv('DB_USER')
TAIL = os.getenv('TAIL')
DB_NAME = os.getenv('DB_NAME')
PROJECT = os.getenv('DJANGO_PROJECT_NAME')
HOST = "127.0.0.1"

# Create sqlalchemy engine.
# To be passed to pandas DataFrame.to_sql() as arg
my_engine = str().join(
    [
        "postgresql+",
        ":".join(["psycopg2", f"//" + DB_USER, TAIL]),
        "".join(["@", HOST, f"/", DB_NAME])
    ]
)

engine = create_engine(my_engine)
CLOUD_SQL = engine.connect()

# Connection details for psycopg2
PSQL_CONNECTION_DETAILS = str(" ").join(
    [
        "dbname=" + DB_NAME,
        "user=" + DB_USER,
        "password=" + TAIL
    ]
)

# Table names in the database
file = open("table_names.json", "r")
with file:
    TABLE_NAMES = json.loads((file.read()))
file.close()

# Create Postgresql connection and cursor
conn = psycopg2.connect(PSQL_CONNECTION_DETAILS)
cur = conn.cursor()

#Update table

def df_convert_iloc2_as_date(df):
    date_series = pd.to_datetime(df.iloc[:,2])
    df.iloc[:,2] = date_series
    return df

for table in TABLE_NAMES:
    model = "_".join([PROJECT, table])
    print(f"Updating {model}...\n\n")

    add_table = pd.read_csv(table + ".csv")
    add_table = df_convert_iloc2_as_date(add_table)

    try:
        add_table.to_sql(model, CLOUD_SQL,
            if_exists='append', index=False)

        print(f"Table {model} has been updated!!!\n\n")
    except Exception as e:
        print(e)

    #Check
    query = f"SELECT * FROM {model};"

    cur.execute(query)
    cur.fetchall()
    conn.commit()

    print("\n\nDone.\n")


print("Closing connections.")
cur.close()
conn.close()
CLOUD_SQL.close()