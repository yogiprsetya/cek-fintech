import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Linking
} from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter'
import fintechList from './list-fintech'
import { createDrawerNavigator } from 'react-navigation-drawer'
import s from '../../style'
const KEYS_TO_FILTERS = ['nama', 'pt']

export default class Fintech extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  static navigationOptions = {
    title: 'Fintech'
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const filteredintechs = fintechList.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )
    return (
      <SafeAreaView style={s.body}>
        <View style={s.searchView}>
          <SearchInput
            onChangeText={term => {
              this.searchUpdated(term)
            }}
            style={[s.searchInput, s.fontReg]}
            placeholder="Cari nama fintech"
          />
          <Image
            style={{ marginTop: 8, right: 31, position: 'absolute' }}
            source={require('../../../assets/icon/search.png')}
          />
        </View>
        <ScrollView>
          {filteredintechs.map(item => {
            return (
              <View style={s.fintechList} key={item.nama}>
                <View style={s.flexColumn}>
                  <View width={230}>
                    <Text style={[s.fintechBrand, s.fontReg, {fontWeight: 'bold'}]}>
                      {item.nama}
                    </Text>
                    <Text style={[s.fontReg, {fontWeight: 'bold'}]}>{item.pt}</Text>
                  </View>

                  <View
                    style={{
                      right: 0,
                      position: 'absolute',
                      fontSize: 10,
                      textAlign: 'right'
                    }}>
                    <Text style={s.fontReg}>{item.no}</Text>
                    <Text
                      onPress={() => Linking.openURL(item.web)}
                      style={[s.fontReg, { textAlign: 'right', color: '#30ca94' }]}>
                      More Info
                    </Text>
                  </View>

                  <View style={[s.flexRow, { marginTop: 15 }]}>
                    <View style={s.flexRow}>
                      <Image
                        style={s.checkIcon}
                        source={
                          item.jenisK == 1
                            ? require('../../../assets/icon/checkPrimary.png')
                            : require('../../../assets/icon/checkSecondary.png')
                        }
                      />
                      <Text style={s.fontReg}>
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
                      <Text style={s.fontReg}>Syariah</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
