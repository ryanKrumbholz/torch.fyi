import pymongo
import re
import pandas
from pymongo import MongoClient
from '.env'

client = MongoClient("") #instantiating Mongo Client
db = client.talent_database #getting db from client
