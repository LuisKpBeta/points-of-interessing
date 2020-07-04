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

>METHOD: GET <Enter>
>URL: /point <Enter>
>RESPONSE: list with all points registered

>METHOD: GET <Enter>
>URL: /find-point<Enter>
>QUERY PARAMETERS: distance, x, y<Enter>
>RESPONSE: list with points in range

>METHOD: POST<Enter>
>URL: /point<Enter>
>BODY: name, coordinateX, coordinateY<Enter>
>RESPONSE: registered point

