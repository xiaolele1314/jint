using Xunit;

namespace Jint.Tests.Runtime
{
    public class FunctionTests
    {
        [Fact]
        public void BindCombinesBoundArgumentsToCallArgumentsCorrectly()
        {
            var e = new Engine();
            e.Execute("var testFunc = function (a, b, c) { return a + ', ' + b + ', ' + c + ', ' + JSON.stringify(arguments); }");
            
            Assert.Equal("a, 1, a, {\"0\":\"a\",\"1\":1,\"2\":\"a\"}", e.Execute("testFunc('a', 1, 'a');").GetCompletionValue().AsString());
            Assert.Equal("a, 1, a, {\"0\":\"a\",\"1\":1,\"2\":\"a\"}", e.Execute("testFunc.bind('anything')('a', 1, 'a');").GetCompletionValue().AsString());
        }
    }
}