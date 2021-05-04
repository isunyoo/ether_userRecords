
https://medium.com/coinmonks/how-to-develop-ethereum-contract-using-python-flask-9758fe65976e

$ truffle init\
$ truffle migrate --reset --compile-all --network development\
$ truffle console --network development\
truffle(development)> networks\
truffle(development)> userRecords = await Migrations.deployed()\
truffle(development)> userRecords.address\

$ FLASK_APP=app.py flask run\
$ curl -H "Content-Type: application/json" --request POST -d '{"name":"John Doe","gender":"male"}' http://localhost:5000/blockchain/user