import React from 'react';  
  
  
// class ErrorBoundary extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.state = { error: false, errorInfo: null };  
//   }  
    
//   componentDidCatch(error, errorInfo) {  
//     // Catch errors in any components below and re-render with error message  
//     this.setState({  
//       error: error,  
//       errorInfo: errorInfo  
//     })  
//   }  
    
//   render() {  
//     if (this.state.errorInfo) {  
//       return (  
//         <div>  
//           <h2>Something went wrong.</h2>  
//           <details style={{ whiteSpace: 'pre-wrap' }}>  
//             {this.state.error && this.state.error.toString()}  
//             <br />  
//             {this.state.errorInfo.componentStack}  
//           </details>  
//         </div>  
//       );  
//     }  
//     return this.props.children;  
//   }    
// } 


class ErrorBoundary extends React.Component {  
    constructor(props) {  
      super(props);  
      this.state = { hasError: false };  
    }  
    static getDerivedStateFromError(error) {  
      // It will update the state so the next render shows the fallback UI.
      console.log(error);  
      return { hasError: true };  
    }  
    componentDidCatch(error, info) {  
      // It will catch error in any component below. We can also log the error to an error reporting service.  
      console.log(error,info);
    }  
    render() {  
      if (this.state.hasError) {  
          return (  
          <div>Something is wrong.</div>  
      );  
      }  
      return this.props.children;   
    }  
  }  
export default ErrorBoundary 