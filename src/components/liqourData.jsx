

const liqourdata = [
  {
    id: 1,
    rname: "Three Chord 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2021/01/Three-Chord-12-Years-Twelve-Bar-Reserve-Bourbon-Whiskey.jpg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2001 + order place from here recently",
    price: "R600",
    rating: "4.5",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0,
  },

  {
    id: 2,
    rname: "STAGG 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/05/Stagg-Jr.-Barrel-Proof-Kentucky-Straight-Bourbon-Whiskey.jpeg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2002 + order place from here recently",
    rating: "3.8",
    price: "R700",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0,
  },

  {
    id: 3,
    rname: "BUCHANNAN'S 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/04/Buchanans-15-Year-Old-Blended-Malt-Scotch-Whisky.jpg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2003 + order place from here recently",
    rating: "4",
    price: "R650",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0,
  },

  {
    id: 4,
    rname: "HOWLER HEAD 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/12/Howler-Head-Kentucky-Straight-Banana-Bourbon-Whiskey.jpg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2004 + order place from here recently",
    rating: "5.5",
    price: "R1000",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    quty:0,
  },

  {
    id: 5,
    rname: "DICKEL TENNESSEE 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2021/03/George-Dickel-15-Years-Old-Single-Barrel-Tennessee-Whiskey.jpg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2005 + order place from here recently",
    rating: "5",
    price: "R800",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0,
  },

  {
    id: 6,
    rname: "DOS HOMBRES 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/07/Dos-Hombres-Artesanal-Joven-Mezcal.jpeg",
    address: "ohannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2006 + order place from here recently",
    rating: "4.5",
    price: "R650",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0,
  },

  {
    id: 7,
    rname: "MICHTER'S BOURBON 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/12/Michters-Small-Batch-Kentucky-Straight-Bourbon.jpg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2007 + order place from here recently",
    rating: "6",
    price: "R900",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0
  },

  {
    id: 8,
    rname: "BULLEIT BOURBON 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/08/Bulleit-Frontier-Barrel-Strength-Kentucky-Straight-Bourbon-Whiskey.jpeg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2008 + order place from here recently",
    rating: "4.5",
    price: "R950",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0
  },
  {
    id: 9,
    rname: "LOS SUNDAYS 750ml",
    imgdata: "https://bigkmarketliquor.com/wp-content/uploads/2020/12/Los-Sundays-Reposado-Tequila.jpg",
    address: "Johannesburg,Randfontein and Soweto",
    delimg: "https://image.freepik.com/free-photo/flat-lay-crooked-arrow_23-2148490562.jpg",
    somedata: "2009 + order place from here recently",
    rating: "5.3",
    price: "R1500",
    arrimg: "https://tse3.mm.bing.net/th?id=OIP.rqccHcAMrwz3-VhRVsBqCwHaDt&pid=Api&P=0",
    qnty:0
  }

]


export default liqourdata