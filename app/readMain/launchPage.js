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
import ReadMain from './readMain';

export default class extends Component {
    render() {
        return (
            <Swiper
                style={styles.wrapper}
                loop={false}
            >
                <View>
                    <Image source={require('./../../images/slider1.png')} style={styles.imgStyle}></Image>
                </View>
                <View>
                    <Image source={require('./../../images/slider2.png')} style={styles.imgStyle}>
                        <CommonBtn
                            btnViewStyle={styles.btnViewStyle}
                            titleStyle={{color: '#e9320c'}}
                            title="马上体验"
                            clickBtn={() => {
                                return this.props.navigator.replace({
                                    component: ReadMain
                                })
                            }}
                        />
                    </Image>
                </View>
            </Swiper>
        );
    }

}

const styles = StyleSheet.create({
    imgStyle: {
        width: Util.windowSize.w,
        height: Util.windowSize.h,
    },
    btnViewStyle: {
        position: 'absolute',
        bottom: 100,
        left: (Util.windowSize.w - 100) / 2,
        backgroundColor: 'transparent',
        borderColor: '#e9320c',
        borderRadius: 8
    }
});
