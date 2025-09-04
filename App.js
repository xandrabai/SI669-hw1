import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainApp extends React.Component {

  constructor() {
    super();

    this.helloPhrases = [
      'Hello World!',
      'Hola Mundo!',
      'Hallo Welt!',
      '你好，世界!',
      '안녕 지구촌!', 
      'नमस्ते विश्व!'
    ];

    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount () {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          currentIndex: (prevState.currentIndex + 1) % this.helloPhrases.length,
        }));
      }, 1000);
    }

  componentWillUnmount(){
      clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <View style={styles.block1}>
            <Text style={styles.label1}>
              {this.helloPhrases[this.state.currentIndex]}
            </Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.block2}>
            <Text style={styles.label2}>{this.helloPhrases[4]}</Text>
          </View>
          <View style={styles.block3}>
            <Text style={styles.label3}>{this.helloPhrases[3]}</Text>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.block4}>
            <Text style={styles.label4}>{this.helloPhrases[5]}</Text>
          </View>
          <View style={styles.block5}>
            <Text style={styles.label5}>{this.helloPhrases[1]}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  view1: {
    flex: 0.3,
    backgroundColor: 'grey',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
    padding:'8%',
  },
  block1: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  label1 : {
    fontSize: 44,
    color: 'pink',
  }, 
  view2: {
    flex: 0.2,
    backgroundColor: 'gray',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  block2: {
    width: '40%',
    height: '60%',
    backgroundColor: 'white',
    alignItems: 'center', 
    justifyContent: 'center',
    margin: '5%',
  },
  label2 : { 
    fontSize: 24,
    color: 'green',
  },
  block3:{
    width: '40%',
    height: '60%',
    backgroundColor: 'green',
    alignItems: 'center', 
    justifyContent: 'center',
    margin: '5%',
  },
  label3 : { 
    fontSize: 24,
    color: 'white',
  },
  view3: {
    flex: 0.1,
    width: '90%',
    backgroundColor: 'gray',
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'row',
  },
  block4: {
    width: '40%',
    backgroundColor: 'purple',
    alignItems: 'center', 
    justifyContent: 'center',
    margin: '5%',
  },
  label4:{
    fontSize: 14,
    color: 'yellow',
  },
  block5: {
    width: '40%',
    backgroundColor: 'yellow',
    alignItems: 'center', 
    justifyContent: 'center',
    margin: '5%',
  },
  label5: {
    fontSize: 14,
    color: 'purple',
  }
});

export default MainApp;
