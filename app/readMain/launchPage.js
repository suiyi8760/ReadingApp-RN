/**
 * Created by xmg on 2017/6/7.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Util from './../readUtil/commonUtil';
import CommonBtn from './../readUtil/commonBtn';

export default class extends Component {
    render() {
        return (
            <Swiper
                loop={false}
            >
                <View>
                    <Image source={require('./../../images/slider1.png')} style={styles.imgStyle}></Image>
                </View>
                <View>
                    <Image source={require('./../../images/slider2.png')} style={styles.imgStyle}>
                        <CommonBtn

                        />
                    </Image>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    imgStyle:{
        width:Util.windowSize.w,
        height:Util.windowSize.h,
    }
});
