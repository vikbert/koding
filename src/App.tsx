import React from 'react'
import './app.css'
import CodeEditor from './components/editor/CodeEditor';

function App() {
  const [editorLanguage, setEditorLanguage] = React.useState("js");
  const code = `<?php

  declare(strict_types = 1);

  namespace Vertriebsportal\Application\Service\Export\OnSale;

  use Vertriebsportal\Application\Service\Export\BaseCsvEncoder;
  use Vertriebsportal\Domain\Model\DistributionChannel;

  final class Encoder extends BaseCsvEncoder
  {
      private $dataProvider;

      public function __construct(DataProvider $dataProvider)
      {
          $this->dataProvider = $dataProvider;
      }

      public function encode(DistributionChannel $distributionChannel, string $sort, string $order): string
      {
          $dtos = $this->dataProvider->dtosForDistributionChannel($distributionChannel, $sort, $order);

          return $this->encodeItems($dtos);
      }
  }
  `
  return (
    <div className="app">
      <CodeEditor language={editorLanguage} content={code}/>
    </div>
  )
}

export default App
