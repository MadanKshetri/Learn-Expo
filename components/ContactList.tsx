import { StyleSheet, Text, View,  ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid:1,
          name:'Madan Kshetri',
          status:'Mobile App developer',
          imageURL: 'https://avatars.githubusercontent.com/u/91882957?s=96&v=4'
        },
        {
            uid:2,
            name:'shikhar Bahik Magar',
            status:'Fullstack Developer',
            imageURL: 'https://avatars.githubusercontent.com/u/38580729?v=4'
        },

        {
            uid:3,
            name:'sudip Poudel',
            status:'Fullstack Developer',
            imageURL: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/487773836_8842706269162782_6837205722666015479_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEyNhOD9kbt_w6JnnKDpBY0kMXbH0qbLWyQxdsfSpstbNQluobd-dfZkZdrfXhbvyq-sXOmniPllNnIUhqHTu2J&_nc_ohc=RzAmaiGc4FMQ7kNvwEQPJMY&_nc_oc=AdniQweCLyZik9XRJVDpLh3P0FOx0fNgQ7gnKTBL_159TbTkrKOfkzgXAF6IgPGqBfY&_nc_zt=23&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=b0IDRwJexir8yBS4gt40Qg&oh=00_AfECipRqwzCRg9Aj8zSyMmXzko7h6HHFFzW3sxZE60OIkQ&oe=680AAB48'
        },
        
        {
          uid:4,
          name:'Sujan Tiwari',
          status:'Backend Developer',
          imageURL: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/481116568_669283772323472_3954357619761829322_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_F1lsX6hN85GanLLTky4Eq2pC0WEC9qyrakLRYQL2rF_Rab96_eScpA_LengU8lU1dZFJYAsavuJD9emoeI4H&_nc_ohc=s4sBhjEnxE8Q7kNvwELS3Wy&_nc_oc=AdlW_YxAZi26cYmDrz6IRw-2Rb0Wm87_mS4ugZMC7CYyOt9VyonE5c6lWhg-SlEqrAA&_nc_zt=23&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=9CLcfqvGxnOSJRbHls-19w&oh=00_AfHZ08zKwT1Saa20kZpy-fTfSpQuvN4ILYojxZZhfPCNtw&oe=680A8627'
        },

        {
            uid:5,
          name:'Samip Poudel',
          status:'Fullstack Developer ',
          imageURL: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-1/449389281_2502412040148259_496558127864153321_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHrEkqO69ds7jiTq-xbRK062TzvjgzoEyjZPO-ODOgTKNVNW7u1YxBypFh6HuLBUikEnAzO0bWk25-xWolPdvMf&_nc_ohc=dA48x86PIn4Q7kNvwGclYbH&_nc_oc=Adko76Zhzic2ih8zcLvvJBvv4CRJa4q8R1j7CXHtE7F93KMNTxqPvNduRh1PxGSD0aE&_nc_zt=24&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=x78Ef_dhEuFu1L496SWIew&oh=00_AfEa7BuTEs2KfC_nE9XLCbiwDd8EG6bbRXT249L9QXg1Jw&oe=680A9868'
        },

        {
            uid:6,
          name:'Bikash Magar',
          status:'senior QA Engineer',
          imageURL: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/347776192_1635335753558228_2074777046895035345_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmQRvaif0vJo7LQCMYur-nnjrMZ9jHIU2eOsxn2MchTWG3lZp8IZoZe9sYp9zlxDdSY9vnGH7o43kic9GKchOX&_nc_ohc=AQ-fdeZ86FgQ7kNvwG0YQvr&_nc_oc=Adk8Dlaq47k3uLH43kmibcZEAl62mcZQGbzxPuoNqnqh7eSYqmz97opOkC1NryyzqLU&_nc_zt=23&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=oFUCIGrLijXgx-E05CKH1g&oh=00_AfFaFubTuXzH7beud8x18l2wdtLWQEsL8SJItOfKlkfeJA&oe=680A8D36'
        },

        {
            uid:7,
          name:'Ramesh Khatri',
          status:'Fullstack Developer',
          imageURL: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/464601898_1766719334136823_2077992180901567707_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHtu5Yzs4h5FmwAx0u0W47KeEOVj7UqpVx4Q5WPtSqlXHb2VU8iRQ1VYubSozyhwiioGGnUMgGDyerih3nouss6&_nc_ohc=fYDs_ZnWQm4Q7kNvwHLsbJE&_nc_oc=Adngf5Hd4Cxz1JDvXWM14m7HUrLlkF4AKb1PyaiIrIfA0LmOVYjcdxIqdqN96EO8ViA&_nc_zt=23&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=40R2aMB6NjKQ7SFGFm9ErQ&oh=00_AfEGKqHQ0jUbQPDs0RkcoAGmn7Qoura0R8YPpMRxIRKKXA&oe=680AB22B'
        },



        {
            uid:8,
            name:'Prashanna Sapkota',
            status:'Ui/Ux designer',
            imageURL: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-1/488770184_1643912636495260_2613669496930286308_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGZYCOIxdUEEeyo_me4om6aesN1Zw9yF1J6w3VnD3IXUt6-jGz8TPKZ-vSwwINhCCQOeH1is8IorGgHUssFSdWf&_nc_ohc=s6M_AJCR5PwQ7kNvwG5Ie6d&_nc_oc=Admoew1xu-oKgy_24r-p5_VGMOdJIjDA3m02Jtce6yQ-towu8SuO_Lwt6eMy267e_tQ&_nc_zt=24&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=3tWW0O8HvepN6fwgGPTxsA&oh=00_AfGitcY-REh4WBx_Lt3ogIzgLDgyuV9qzZ8ZifzW_lNzfQ&oe=680AB1A8' 
        },


        

        
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map (({uid, name, imageURL, status})=>(
          <View key={uid} style={styles.useCard}>
            <Image 
            source={{
                uri:imageURL
            }}
            style= {styles.userImage}
            />
          <View style={styles.descriprion}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userStatus}>{status}</Text>
          </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        paddingHorizontal: 8,
		fontSize: 24,
		fontWeight: "bold",
        
    },
    container:{
        paddingHorizontal:16,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#AE1438'
        
       
    },
    useCard:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
       
    },
    userImage:{
        width:60,
        height:60,
        borderRadius: 60  /  2,
        marginRight:12,
        marginBottom:12,
    },
    userName:{
        fontSize:16,
        fontWeight: '600'
    },
    userStatus:{
        fontSize:12,

    },
    descriprion:{
        backgroundColor:'#E84342',
        borderRadius:16,
        padding:8

    }

})