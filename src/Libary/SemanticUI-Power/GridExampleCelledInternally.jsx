import { Grid, Image, List } from "semantic-ui-react";
import Image1 from "./Assets/1.jpg";
import Image2 from "./Assets/2.jpg";
import Image3 from "./Assets/3.jpg";
import Image4 from "./Assets/4.jpg";
import Card from "./CardExampleGroups";

const GridExampleCelledInternally = () => (
  <Grid celled="internally">
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={Image1} />
      </Grid.Column>
      <Grid.Column width={10}>
        <div className="h-full flex items-center justify-center">
          <List horizontal ordered>
            <List.Item>
              <Image
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
              />
              <List.Content>
                <List.Header>Tom</List.Header>
                Top Contributor
              </List.Content>
            </List.Item>
            <List.Item>
              <Image
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
              />
              <List.Content>
                <List.Header>Christian Rocha</List.Header>
                Admin
              </List.Content>
            </List.Item>
            <List.Item>
              <Image
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
              />
              <List.Content>
                <List.Header>Matt</List.Header>
                Top Rated User
              </List.Content>
            </List.Item>
          </List>
        </div>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src={Image2} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={Image3} />
      </Grid.Column>
      <Grid.Column width={10}>
        <div className="pt-20">
          <Card />
        </div>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src={Image4} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleCelledInternally;
