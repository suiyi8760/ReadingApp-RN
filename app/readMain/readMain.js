/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform
} from 'react-native';

//引入底部tab栏组件
import TabNavigator from 'react-native-tab-navigator';

//引入分页内容
import ReadReading from '../readReading/readReading';
import ReadPark from '../readPark/readPark';
import ReadFind from '../readFind/readFind';
import ReadMine from '../readMine/readMine';

export default class ReadMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'reading'
        }
    }

    render() {
        return <TabNavigator>
            {/*阅读*/}
            {this._renderTabItem({
                title: '阅读',
                staticIcon: 'icon_tabbar_homepage',
                selectedIcon: 'icon_tabbar_homepage_selected',
                selectedTab: 'reading',
                component: <ReadReading {...this.props} />
            })}
            {/*公园*/}
            {this._renderTabItem({
                title: '公园',
                staticIcon: 'icon_tabbar_merchant_normal',
                selectedIcon: 'icon_tabbar_merchant_selected',
                selectedTab: 'park',
                component: <ReadPark {...this.props} />
            })}
            {/*发现*/}
            {this._renderTabItem({
                title: '发现',
                staticIcon: 'icon_tabbar_nearby_normal',
                selectedIcon: 'icon_tabbar_nearby_selected',
                selectedTab: 'find',
                component: <ReadFind {...this.props} />
            })}
            {/*我的*/}
            {this._renderTabItem({
                title: '我的',
                staticIcon: 'icon_tabbar_mine',
                selectedIcon: 'icon_tabbar_mine_selected',
                selectedTab: 'mine',
                badgeNum: '20',
                component: <ReadMine {...this.props} />
            })}
        </TabNavigator>
    }

    /**
     * tab栏渲染函数封装
     * @param options
     * @returns {XML}
     * @private
     */
    _renderTabItem(options) {
        return (
            <TabNavigator.Item
                title={options.title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => <Image source={{uri: options.staticIcon}} style={styles.tabBarIcon}></Image>}
                renderSelectIcon={() => <Image source={{uri: options.selectedIcon}} style={styles.tabBarIcon}></Image>}
                onPress={() => this.setState({selectedTab: options.selectedTab})}
                selected={this.state.selectedTab === options.selectedTab}
                renderBadge={() => this._renderBadge(options.badgeNum)}
            >
                {options.component}
            </TabNavigator.Item>
        )
    }

    // 自定义气泡效果
    _renderBadge(badgeText) {
        if (badgeText == undefined) return;
        return (
            <View style={styles.badgeStyle}>
                <Text style={styles.badgeTxtStyle}>{badgeText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 26,
        height: 26
    },

    selectedTitleStyle: {
        color: 'rgba(61,183,174, 1)'
    },

    badgeStyle: {
        height: 20,
        width: 20,
        backgroundColor: '#e9232c',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 19,
        top: Platform.OS === 'ios' ? -5 : 0
    },

    badgeTxtStyle: {
        color: '#fff',
        backgroundColor: 'transparent'
    }
});
