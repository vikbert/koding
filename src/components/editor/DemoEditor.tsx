import React from 'react'
import CodeEditor from "./CodeEditor";

const root = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'

}
export default function DemoEditor() {
    return (<div className="demo-container" style={root}>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
        <CodeEditor code={demoCode} language={'php'}/>
    </div>);
}

const demoCode = `final class Encoder
{
    private $dataProvider;

    public function __construct(DataProvider $dataProvider)
    {
        $this->dataProvider = $dataProvider;
    }
}`
