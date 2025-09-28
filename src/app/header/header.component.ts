import { Component, inject } from "@angular/core";
import { Route, Router } from "@angular/router";


// we need this simple class now. to change  into comopnent class . So use decarated it
@Component({
    selector: 'app-header',
    // View template or View tempalte URL property
    // template : ' <h1>Hello</h1>'

    templateUrl: './header.component.html',
    styleUrls: ['./header.componant.css']
})

//convention : Name of the class must be folder name with prefix Component
// "export" -> Needed this class to others. So use this import it others
export class HeaderComponent {
    private router = inject(Router)
    onSubmitHome() {
        this.router.navigate(['/app-home-container'])
    }
}

