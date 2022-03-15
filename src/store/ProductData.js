var Date = new Date({
            el: '#Date',
            data: {
                itemList: [{
                        id: '1',
                        itemName: '日本A5和牛起士堡',
                        imgUrl: '../product/images/japanA5Buger.png',
                        price: '195',
                        count: '99'
                    },
                    {
                        id: '2',
                        itemName: '起士鱈魚堡',
                        imgUrl: '../product/images/codfishBuger.png',
                        price: '105',
                        count: '99'
                    },
                    {
                        id: '3',
                        itemName: '海味炸蝦米堡',
                        imgUrl: '../product/images/riceBuger.png',
                        price: '105',
                        count: '99'
                    },
                    {
                        id: '4',
                        itemName: '勁辣花生雞芝加哥堡',
                        imgUrl: '../product/images/chicagoBuger.png',
                        price: '115',
                        count: '1'
                    },
                    {
                        id: '5',
                        itemName: '鮪魚蛋皇后堡',
                        imgUrl: '../product/images/tunaEggBrioche.png',
                        price: '115',
                        count: '99'
                    },
                    {
                        id: '6',
                        itemName: '芋見紅豆皇后堡',
                        imgUrl: '../product/images/taroRedBeansBrioche.png',
                        price: '115',
                        count: '99'
                    },
                ]
            },
            methods:{
                handlePlus: function(item){
                    item.count++;
                },
                handleSub: function(item){
                    if(item.count>1){
                    item.count--;                
                    }
                },
                handledelete: function(index){
                    console.log(this);
                    this.itemList.splice(index,1);
                }
            },
            computed:{
    
            }
        })