import Grid1 from "./GridExampleCelledInternally";
import Grid2 from "./GridExampleGrid";
import Table1 from "./TableExampleApprove";
import Table2 from "./TableExampleStructured";
import Segment1 from "./SegmentExamplePlaceholderGrid";
// import Placeholder1 from "./PlaceholderExampleCard";
import Image1 from "./Assets/c1.jpg";
import Image2 from "./Assets/left.jpg";
import Image3 from "./Assets/right.jpg";
import Sticky from "./StickyExampleOffset";

import { Grid, Image } from "semantic-ui-react";
import { Header, Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="p-32">
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Semantic UI React</Header.Content>
        </Header>
        <Image
          centered
          size="large"
          src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
        />
      </div>
      <div className="pb-20"></div>

      <Grid>
        <Grid.Column width={4}>
          <Image src={Image3} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src={Image1} className="overflow-hidden" />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src={Image2} />
        </Grid.Column>
      </Grid>
      <div className="pb-20"></div>
      <Grid1 />
      <div className="pb-20"></div>
      <Grid2 />

      <div className="pb-20"></div>
      <Segment1 />
      <div className="pb-20"></div>
      <Table1 />
      <div className="pb-20"></div>
      <Table2 />
      <div className="pb-20"></div>
      <div className="h-60">
        <Sticky />
      </div>

      {/* <Placeholder1 /> */}
    </div>
  );
}

export default App;
