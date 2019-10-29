import React, {PureComponent} from 'react';
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
import s from './style';

export default class PokeList extends PureComponent {
  // const [value, onChangeText = React.useState('Cari nama fintech')

  constructor(props) {
    super(props);
    this.state = {
      data: require('./list-fintech.json'),
    };
  }

  render() {
    const {data} = this.state;

    return (
      <SafeAreaView style={s.body}>
        <View style={s.searchBox}>
          <TextInput style={s.search} placeholder={'Cari nama fintech'} />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={s.fintechList}>
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
          }}></FlatList>
      </SafeAreaView>
    );
  }
}
