import { Button } from "react-native";
import { ListItem } from "react-native-elements";
import { Text } from "react-native";

export default function MyListItem({itemData, navigatorRef}) {
    return(
    <ListItem>

      <ListItem.Content>
        <Text>{itemData.activity}</Text>{console.log(itemData)}
      </ListItem.Content>

      <Button
        icon={{
          name: 'caret-forward',
          type: 'ionicon',
          size: 15,
        }}
        iconPosition='right'
        onPress={() => navigatorRef.navigate('ActivityDetails', {
          detailKey: itemData.key,
        })}
      />
    </ListItem>
    );
}