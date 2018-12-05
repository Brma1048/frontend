import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateTripComponent } from './create-trip.component';

@Injectable()
export class CreateTripGuard implements CanDeactivate<CreateTripComponent> {
    canDeactivate(component: CreateTripComponent): boolean {
        if (component.fertig) {
            return true;
        }
        component.showWarning = true;
        component.fertig = true;
        console.warn('Beim Verlassen der Seite werden Daten verloren.');
        return false;
        /*
        if (component.createTripForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
         return true;
         */
    }
}
