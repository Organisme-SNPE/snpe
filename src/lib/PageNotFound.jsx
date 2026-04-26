import { useLocation } from 'react-router-dom';

export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-void font-body">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-8xl font-heading tracking-tighter text-pulse/20">404</h1>
                        <div className="h-px w-16 bg-pulse/30 mx-auto"></div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading uppercase tracking-wider text-foreground">
                            Lost in the Void
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The page <span className="text-pulse">"{pageName}"</span> could not be found.
                        </p>
                    </div>
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="px-8 py-3 bg-pulse/10 border border-pulse/50 text-pulse font-heading text-sm tracking-widest uppercase hover:bg-pulse hover:text-void transition-all duration-300"
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}