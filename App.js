import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Fintech from './src/screen/Fintech'
import About from './src/screen/About'
import CustomStatusBar from './src/components/StatusBar';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer()
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CustomStatusBar backgroundColor="#31ca94" barStyle="light-content"/>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/icon/drawer.png')}
            style={{ width: 33, height: 33, marginLeft: 6 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const Fintechs = createStackNavigator({
  First: {
    screen: Fintech,
    navigationOptions: ({ navigation }) => ({
      title: 'Fintech',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: '#2b2b2b',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
})

const Abouts = createStackNavigator({
  Second: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: '#2b2b2b',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
})

const RootStack = createDrawerNavigator(
  {
    Fintech: { screen: Fintechs },
    About: { screen: Abouts }
  },
  {
    initialRouteName: 'Fintech'
  }
)

const App = createAppContainer(RootStack)
export default App
