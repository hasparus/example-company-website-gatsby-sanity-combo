export = BlockContent;
declare function BlockContent(props: any): any;
declare namespace BlockContent {
  const defaultProps: {
    imageOptions: {};
    renderContainerOnSingleChild: boolean;
    serializers: {};
  };
  namespace defaultSerializers {
    function block(props: any): any;
    const container: string;
    const empty: string;
    function hardBreak(): any;
    function list(props: any): any;
    function listItem(props: any): any;
    const markFallback: string;
    namespace marks {
      function code(p0: any): any;
      function em(p0: any): any;
      function link(props: any): any;
      function strong(p0: any): any;
      function underline(props: any): any;
    }
    function span(props: any): any;
    const text: any;
    namespace types {
      function block(props: any): any;
      function image(props: any): any;
    }
  }
  function getImageUrl(props: any): any;
  namespace propTypes {
    function blocks(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function dataset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace dataset {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function imageOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace imageOptions {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function projectId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace projectId {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function renderContainerOnSingleChild(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace renderContainerOnSingleChild {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function serializers(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace serializers {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
