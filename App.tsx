// ////// First example of Array /////////

// import React from 'react';
// import {ScrollView, StyleSheet, Text, View} from 'react-native';

// export default function App(): JSX.Element {
//   // creating Array of object
//   const users = [
//     {
//       id: 1,
//       name: 'Asif',
//     },
//     {
//       id: 2,
//       name: 'Muhammad Asif',
//     },
//     {
//       id: 3,
//       name: 'Algoace',
//     },
//     {
//       id: 4,
//       name: 'Mango',
//     },
//     {
//       id: 5,
//       name: 'Apple',
//     },
//     {
//       id: 6,
//       name: 'Asif',
//     },
//     {
//       id: 7,
//       name: 'Muhammad Asif',
//     },
//     {
//       id: 8,
//       name: 'Algoace',
//     },
//     {
//       id: 9,
//       name: 'Mango',
//     },
//     {
//       id: 10,
//       name: 'Apple',
//     },
//     {
//       id: 11,
//       name: 'Asif',
//     },
//     {
//       id: 12,
//       name: 'Muhammad Asif',
//     },
//     {
//       id: 13,
//       name: 'Algoace',
//     },
//     {
//       id: 14,
//       name: 'Mango',
//     },
//     {
//       id: 15,
//       name: 'Apple',
//     },
//   ];

//   return (
//     <View>
//       <Text>Alhamdulillah</Text>
//       <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
//       {/* ya wo users hay jis may hamara array of object pra huva hay.
//   map function may humay aik call back bhi pass krna hota hay. or ya humay parameter deta hay jis ka name may nay 'item' rakha hay. */}
//       {users.map(item => (
//         <Text key={item.id} style={styles.list}>{item.name}</Text>
//       ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   list: {
//     borderWidth: 1,
//     height: 50,
//     width: 345,
//     marginLeft: 15,
//     margin: 7,
//     paddingLeft: 11,
//     paddingTop: 11,
//     color: 'black',
//     backgroundColor: 'aqua'
//   },
//   scroll: {
//     marginBottom: 22,
//   }
// })



////// Second example of Array /////////

import React from 'react';
import {Text, View} from 'react-native';

export default function App(): JSX.Element {
  // creating Array of object
  const users = [1,2,3,4,5,6,7];

  return (
    <View>
      <Text>Alhamdulillah</Text>
      <Text>
      {users.map((item) => (
        item * 3
      ))}
      </Text>
      <Text>
      {users.map((item) => 
        item * item
      )}
      </Text>
    </View>
  );
}


// Showing result in the console // 

// example: 1.
// const Array = [1,2,3,4,5,6,7]
// const newArray = Array.map((item) => (
//   item * 2
// ))
// console.log(newArray)

// example: 2.
const Array = [1,2,3,4,5,6,7]
const newArray = Array.map((item) => (
  item * item
))
console.log(newArray)