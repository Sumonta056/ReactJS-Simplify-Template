import _ from "lodash";
import { Grid, Image } from "semantic-ui-react";
import Image1 from "./Icons/cart.png";

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src={Image1} />
  </Grid.Column>
));

const GridExampleGrid = () => <Grid>{columns}</Grid>;

export default GridExampleGrid;
