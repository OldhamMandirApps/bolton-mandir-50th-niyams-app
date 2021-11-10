import { Niyam } from '../../../config/niyams';

function validate(niyam: Niyam | null, name: string | null, progress: number | null): boolean {
  if (!niyam || !progress) {
    return false;
  } else if (progress && progress <= 0) {
    return false;
  } else if (niyam === Niyam.BhaktachintamaniVachanamrut && !name) {
    return false;
  } else {
    return true;
  }
}

export default validate;
