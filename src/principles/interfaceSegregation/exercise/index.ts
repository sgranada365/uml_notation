import { FaxExercise } from "./faxExercise.class";
import { PrinterExercise } from "./printerExercise.class";
import { ScanExercise } from "./scanExercise.class";

/**
 * Ejercicio de Segregacion de interfaces
 *
 * Una maquina multi servicios
 *
 * ¿Como deberiamos refactorizar estas maquinas de oficina
 * para que cumpla con el principio de segregacion de interfaces?
 *
 * Tip: una impresora que envia fax?
 */

export const exercise = () => {
  const printer = new PrinterExercise();
  const fax = new FaxExercise();
  const scanner = new ScanExercise();

  printer.print();
  printer.fax();
  printer.scan();

  fax.print();
  fax.fax();
  fax.scan();

  scanner.print();
  scanner.fax();
  scanner.scan();
};
