/**
 * Created by xmg on 2017/6/7.
 */
import React, {Component,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class  extends Component {

        static propTypes = {
            btnViewStyle: View.propTypes.style,
            titleStyle: View.propTypes.style,
            title: PropTypes.string,
            clickBtn: PropTypes.func,
            renderImg: PropTypes.func
        }

        static defaultProps = {
            title: '默认按钮',
            clickBtn(){
            },
            renderImg(){
            }
        }


    render() {
        return (
            <TouchableOpacity
                style={[styles.defaultStyle, this.props.btnViewStyle]}
                onPress={() => this.props.clickBtn()}
            >
                <Text
                    style={[styles.defaultTxtStyle, this.props.titleStyle]}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        width: 100,
        height: 36,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9320c'
    },
    defaultTxtStyle: {
        color: '#fff',
        fontSize: 16
    }
});
