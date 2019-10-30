import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Linking,
  Button,
  FlatList,
} from 'react-native';
import SearchInput, {createFilter} from 'react-native-search-filter';
import fintechList from './list-fintech';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import s from './style';
const KEYS_TO_FILTERS = ['nama', 'pt'];

export default class App extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  static navigationOptions = {
    title: 'Fintech',
  };

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  render() {
    const filteredintechs = fintechList.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
    );
    return (
      <SafeAreaView style={s.body}>
        <View style={s.searchView}>
          {/* <Button
            title={'TEST'}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          /> */}
          <SearchInput
            onChangeText={term => {
              this.searchUpdated(term);
            }}
            style={[s.searchInput, s.fontReg]}
            placeholder="Cari nama fintech"
          />
          <Image
            style={{marginTop: 8, right: 31, position: 'absolute'}}
            source={require('../../../assets/icon/search.png')}
          />
        </View>
        <ScrollView>
          {filteredintechs.map(item => {
            return (
              <View style={s.fintechList} key={item.nama}>
                <View style={s.flexColumn}>
                  <View width={230}>
                    <Text style={[s.fintechBrand, s.fontBold]}>
                      {item.nama}
                    </Text>
                    <Text style={s.fontSemiBold}>{item.pt}</Text>
                  </View>

                  <View
                    style={{
                      right: 0,
                      position: 'absolute',
                      fontSize: 10,
                      textAlign: 'right',
                    }}>
                    <Text style={s.fontReg}>{item.no}</Text>
                    <Text
                      style={s.fontReg}
                      onPress={() => Linking.openURL(item.web)}
                      style={{textAlign: 'right', color: '#30ca94'}}>
                      More Info
                    </Text>
                  </View>

                  <View style={{marginTop: 15}}>
                    <View style={s.flexRow}>
                      <View style={s.flexRow}>
                        <Image
                          style={s.checkIcon}
                          source={
                            item.jenisK == 1
                              ? require('../../../assets/icon/checkPrimary.png')
                              : require('../../../assets/icon/checkSecondary.png')
                          }
                        />
                        <Text style={{width: 100}} style={s.fontReg}>
                          Konvensional
                        </Text>
                      </View>

                      <View style={s.flexRow}>
                        <Image
                          style={s.checkIcon}
                          source={
                            item.jenisS == 1
                              ? require('../../../assets/icon/checkPrimary.png')
                              : require('../../../assets/icon/checkSecondary.png')
                          }
                        />
                        <Text style={{width: 70}} style={s.fontReg}>
                          Syariah
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start',
//   },
//   emailItem: {
//     borderBottomWidth: 0.5,
//     borderColor: 'rgba(0,0,0,0.3)',
//     padding: 10,
//   },
//   emailSubject: {
//     color: 'rgba(0,0,0,0.5)',
//   },
//   searchInput: {
//     padding: 10,
//     borderColor: '#CCC',
//     borderWidth: 1,
//   },
// });
