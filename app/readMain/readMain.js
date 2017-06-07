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
                title:'阅读',
                staticIcon:'icon_tabbar_homepage',
                selectedIcon:'icon_tabbar_homepage_selected',
                selectedTab:'reading',
                component:<ReadReading />
            })}
            {/*公园*/}
            {this._renderTabItem({
                title:'公园',
                staticIcon:'icon_tabbar_merchant_normal',
                selectedIcon:'icon_tabbar_merchant_selected',
                selectedTab:'park',
                component:<ReadPark />
            })}
            {/*发现*/}
            {this._renderTabItem({
                title:'发现',
                staticIcon:'icon_tabbar_nearby_normal',
                selectedIcon:'icon_tabbar_nearby_selected',
                selectedTab:'find',
                component:<ReadFind />
            })}
            {/*我的*/}
            {this._renderTabItem({
                title:'我的',
                staticIcon:'icon_tabbar_mine',
                selectedIcon:'icon_tabbar_mine_selected',
                selectedTab:'mine',
                component:<ReadMine />
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
        return <TabNavigator.Item
            title={options.title}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image source={{uri: options.staticIcon}} style={styles.tabBarIcon}></Image>}
            renderSelectIcon={() => <Image source={{uri: options.selectedIcon}} style={styles.tabBarIcon}></Image>}
            onPress={() => this.setState({selectedTab: options.selectedTab})}
            selected={this.state.selectedTab === options.selectedTab}
        >
            {options.component}
        </TabNavigator.Item>
    }

    // 自定义气泡效果
    _renderBadge(badgeText){
        if(badgeText==undefined) return;
        return 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarIcon:{
        width:26,
        height:26
    },
    selectedTitleStyle:{
        color:'rgba(61,183,174, 1)'
    },
});
