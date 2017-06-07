/**
 * Created by xmg on 2017/6/7.
 */
import React, {Component} from 'react';
import {
    Dimensions,
    PixelRatio
} from 'react-native';

module.exports = {
    //获取屏幕尺寸
    windowSize: {
        w: Dimensions.get('window').width,
        h: Dimensions.get('window').height
    },
    getData(url, success, error){
        fetch(url)
            .then(response => response.json())
            .then(respnoseJSON => {
                success(respnoseJSON);
            })
            .catch(err => {
                error(err)
            })
    },
    normalRatio: 1 / PixelRatio.get(),
    viewColor: '#e8e8e8'
}

