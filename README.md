# FE WM Products

## Commands

### Build

```sh
docker build -t fe-wmproducts .
```

### Run

```sh
docker run  -it --rm \
-e PORT=3000 \
-e HOST=0.0.0.0 \
-e REACT_APP_MS_HOST="https://ms-wmproducts.herokuapp.com" \
-p 80:3000 \
--name fe-wmproducts fe-wmproducts
```
