'use strict';

import React from 'react-native';

var {StyleSheet} = React;

module.exports = StyleSheet.create({
  body: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    flex: 1,
  },

  fontBold: {
    fontFamily: 'Montserrat-Bold',
  },

  fontSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
  },

  fontReg: {
    fontFamily: 'Montserrat-Regular',
  },

  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },

  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },

  searchBox: {
    marginBottom: 10,
  },

  search: {
    height: 42,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 1,
    elevation: 2,
  },

  fintechList: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 2,
  },

  fintechBrand: {
    fontSize: 19,
    marginBottom: 3,
    fontWeight: '500',
  },

  checkIcon: {
    width: 15,
    height: 15,
    marginTop: 4,
    marginRight: 4,
  },
});
