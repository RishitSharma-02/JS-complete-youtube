const Books = [
    {
        title : "S Se Samadhi", genere :"philosophical" ,
        published: 1981, eddition : 2015
    },
    {
        title : "Gunda" , genere : "hindi literature" , 
        published :1979 , edition : 2013
    },
    {
        titile : "Gunaho ka devta " , genere : "story" , 
        published : 1987 , edition: 2015
    },
    {
        titile : "its not yoou its biology " , genere : "anthro" , 
        published : 1982 , edition: 2016
    },
    {
        titile : "krishn the man" , genere : "philosophical" , 
        published : 1980 , edition: 2010
    },
    {
        titile : "budha " , genere : "literature" , 
        published : 1997 , edition: 2019
    }
]

let userbooks = Books.filter((bk) => bk.genere === 'philosophical')

console.log(userbooks);

userbooks = Books.filter((bk) => {
    return bk.published <= 2000
})

console.log(userbooks);