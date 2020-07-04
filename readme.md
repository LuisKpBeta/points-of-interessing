## Points of Interessing

### Features:
- Create points based on name, coordernades (x,y)
- List all points
- List all points by proximity

### Examples
- 'Lanchonete' (x=27, y=12)
- 'Posto' (x=31, y=18)
- 'Joalheria' (x=15, y=12)
- 'Floricultura' (x=19, y=21)
- 'Pub' (x=12, y=8)
- 'Supermercado' (x=23, y=6)
- 'Churrascaria' (x=28, y=2)

>Searching for (20,10) with 10 meters distance returns:
> Lanchonete
> Joalheria
> Pub
> Supermercado

### Routes

>METHOD: GET
>URL: /point
>RESPONSE: list with all points registered

>METHOD: GET
>URL: /find-point
>QUERY PARAMETERS: distance, x, y
>RESPONSE: list with points in range

>METHOD: POST
>URL: /point
>BODY: name, coordinateX, coordinateY
>RESPONSE: registered point

