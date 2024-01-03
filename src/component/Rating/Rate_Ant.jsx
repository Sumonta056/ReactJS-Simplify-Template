import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";

const formatter = (value) => <CountUp end={value} separator="," />;

const Rate_Ant = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={221}
          formatter={formatter}
          precision={2}
          valueStyle={{
            color: "#3f8600",
            fontSize: "100px",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
      
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={125}
          formatter={formatter}
          precision={2}
          valueStyle={{
            color: "#cf1322",
            fontSize: "100px",
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default Rate_Ant;
