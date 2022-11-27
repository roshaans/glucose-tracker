# Dexcom Sensor Tracker

This program allows to label and track Dexcom glucose sensors for a fleet of users. 

It crawls each user's account every x seconds and stores the data in a database. 

# Setup

### setup local database

      docker-compose up

# Run Services

### Start the indexer

      yarn start:tracker

## Grafana dashboard

      https://glucocheck.grafana.net/
