import React from 'react'
import CodeEditor from "./CodeEditor";

const loop = [1, 2, 3, 4, 8, 9, 9, 9];
const root = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
}
export default function DemoEditor() {
    // @ts-ignore
    return <div className="demo-container" style={root}>
        {loop.map((item, index) => (
            <CodeEditor key={index} code={demoCode} lang={'php'}/>
        ))}
    </div>;
}

const demoCode = `final class Encoder
{
    private $dataProvider;

    public function __construct(DataProvider $dataProvider)
    {
        $this->dataProvider = $dataProvider;
    }
}`
