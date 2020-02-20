import Beranda from '../screens/Beranda';
import ListMenu from '../screens/ListMenu';
import Checkout from '../screens/Checkout';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailTransaksi from '../screens/DetailTransaksi';

const screens = {
    Beranda: {
        screen: Beranda,
        navigationOptions: {
            headerShown: false,
        }
    },
    ListMenu: {
        screen: ListMenu,
        navigationOptions: {
            title: 'Pilih Menu',
            headerShown: false,
        }
    },
    DetailTransaksi: {
        screen: DetailTransaksi,
        navigationOptions: {
            title: 'Detail Transaksi',
            headerShown: false,
        }
    },
    Checkout: {
        screen: Checkout,
        navigationOptions: {
            headerShown: false,
        }
    }
}

const routes = createStackNavigator(screens);

export default createAppContainer(routes);