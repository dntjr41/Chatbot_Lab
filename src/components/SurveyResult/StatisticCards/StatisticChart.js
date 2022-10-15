import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'
import { Tab, Tabs } from 'react-bootstrap';

const StatisticChart = function ({ data }) {

    const pieChart = (
        <ResponsivePie
            data={data}
            id={"value"}
            value={"cnt"}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
            sortByValue={true}
            innerRadius={0.35}
            padAngle={2}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'greens' }}
            borderWidth={2}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '1'
                    ]
                ]
            }}
            arcLinkLabel="value"
            arcLinkLabelsTextColor="#000000"
            arcLinkLabelsStraightLength={20}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
            arcLabel="id"
            arcLabelsTextColor="#000000"
        />
    )

    const barChart = (
        <ResponsiveBar
            data={data}
            keys={[
                "cnt"
            ]}
            indexBy={"value"}
            margin={{ top: 40, right: 200, bottom: 40, left: 200 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'greens' }}
            colorBy="indexValue"
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '답변',
                legendPosition: 'middle',
                legendOffset: 35
            }}
            axisLeft={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="black"
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
        />
    )
    return (
        <>
            <Tabs
                defaultActiveKey="pie-chart"
                id="chart"
                className="mb-2"
                fill
            >
                <Tab eventKey="pie-chart" title="원 그래프"
                    style={{ height: "500px" }}>
                    {pieChart}
                </Tab>
                <Tab eventKey="bar-chart" title="바 그래프"
                    style={{ height: "500px" }}>
                    {barChart}
                </Tab>
            </Tabs>
        </>
    )
}

export default StatisticChart;