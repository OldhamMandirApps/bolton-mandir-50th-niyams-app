import { Niyam } from '../../../config/niyams';

function validate(niyam: Niyam | null, progress: number | null): boolean {
  if (!niyam || !progress) {
    return false;
  } else if (progress && progress <= 0) {
    return false;
  } else {
    return true;
  }
}

export default validate;
