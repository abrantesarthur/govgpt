# govgpt

### Plano

- Aggregate and transform every congressman's data into a single CSV file
  - Write the script to fetch all the data for every deputy
  - The script stores it in a file
  - The assistant reads from that file
- Create an assistant and uplaod the file to it
- V2: Add functions to help the assistant answer specific questions

## Using Locally

To develop locally, you must have the following programs installed:

- nvm (0.39.0)
- node (21.6.0)
- yarn (1.22.21)

## Data Source APIs

To power this service, we rely on the data made available by the APIs [Portal da Transparencia](https://api.portaldatransparencia.gov.br/swagger-ui/index.html) and [Dados Abertos](https://dadosabertos.camara.leg.br/swagger/api.html).
