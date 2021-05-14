import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import store from './redux/index';
import SideBarNavigator from './navigation/SideBarNavigator';

const fetchedFonts = () =>
	Font.loadAsync({
		Regular: require('./assets/fonts/PTSansNarrow-Regular.ttf'),
		Bold: require('./assets/fonts/PTSansNarrow-Bold.ttf'),
	});

export default function App() {
	const [loadFonts, setLoadFonts] = useState(false);

	if (!loadFonts) {
		return (
			<AppLoading
				startAsync={fetchedFonts}
				onFinish={() => setLoadFonts(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<View style={styles.container}>
					<SideBarNavigator />
				</View>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
