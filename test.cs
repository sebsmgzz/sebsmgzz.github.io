
namespace Library
{
    class AccessModifiers
    {

        private void PrivateMethod()
        {

        }
        protected void ProtectedMethod()
        {

        }
        internal void InternalMethod()
        {
            
        }
        public void PublicMethod()
        {

        }
        private protected PrivateProtectedMethod()
        {

        }
        protected internal ProtectedInternalMethod()
        {

        }
    }
    class SameAssemblyChild : AccessModifiers
    {

    }
    class SameAssembly
    {
        
    }
}

namespace Program
{
    class Main
    {

    }
    class DifferentAssemblyChild : AccessModifiers
    {

    }
}