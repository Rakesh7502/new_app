import ActionButton from "./action-button"
import Counter from "./Counter"
export default function SamplePage(){
    return (<main className="p-12 min-h-screen background-white">
        <h4>Action Button Test</h4>
        <ActionButton text="My Action"/>
        <h4>Counter</h4>
        <Counter initialCount={4}/>
        
    </main>)
}