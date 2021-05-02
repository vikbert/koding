import React from 'react'
import CodeEditor from "./CodeEditor";

const root = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
}
export default function DemoEditor() {
    // @ts-ignore
    return <div className="demo-container" style={root}>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
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
