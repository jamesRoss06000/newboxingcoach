import { API_URL } from "./Platform";
import { Alert } from "react-native";

export async function fetechPublishableKey() {
    try {
        const response = await fetch(`${API_URL}/config`);
        const {publishableKey} = await response.json();
        return publishableKey;
    } catch {
        console.log(e);
        console.log('Unable to fetch key. Check server...');
        Alert.alert('Error', 'Unable to fetch publshable key. Check server...');
    }
}