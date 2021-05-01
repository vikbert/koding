import React, { useState } from 'react'
import './App.css';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; //Example style, you can use another


function App() {
  const [value, setValue] = useState(`<?php

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
  `)
  return (
    <div className="app">
      <Editor
        value={value}
        onValueChange={(code) => setValue(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          color: 'rgb(169 208 247)',
        }}
      />
    </div>
  );
}

export default App;
