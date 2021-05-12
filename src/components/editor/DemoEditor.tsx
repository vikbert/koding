import React from 'react';
import ReadOnlyEditor from './ReadOnlyEditor';

const loop = [1, 2, 3, 4, 8, 9, 9, 9];
export default function DemoEditor() {
  // @ts-ignore
  return (
    <div
      className="demo-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {loop.map((item, index) => (
        <ReadOnlyEditor key={index} code={demoCode} disabled={true} />
      ))}
    </div>
  );
}

const demoCode = `final class Encoder
{
    private $dataProvider;

    public function __construct(DataProvider $dataProvider)
    {
        $this->dataProvider = $dataProvider;
    }
}`;
