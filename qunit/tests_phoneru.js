define([
	"qunit",
	"inputmask.dependencyLib",
	"inputmask",
	"../dist/inputmask/inputmask.date.extensions",
	"../dist/inputmask/inputmask.extensions",
	"../dist/inputmask/inputmask.numeric.extensions",
	"../dist/inputmask/inputmask.phone.extensions",
	"../extra/phone-codes/phone",
	"../extra/phone-codes/phone-be",
	"../extra/phone-codes/phone-nl",
	"../extra/phone-codes/phone-ru",
	"../extra/phone-codes/phone-uk",
	"../dist/inputmask/inputmask.regex.extensions",
	"prototypeExtensions",
	"simulator"
], function (qunit, $, Inputmask) {

	qunit.module("Phoneru masks");

	qunit.test("inputmask(\"phoneru\")", function (assert) {
		var $fixture = $("#qunit-fixture");
		$fixture.append('<input type="text" id="testmask" />');
		var testmask = document.getElementById("testmask");
		Inputmask("phoneru", {nullable: false}).mask(testmask);

		testmask.focus();

		$.each(Inputmask.prototype.defaults.aliases.phoneru.phoneCodes, function (ndx, lmnt) {
			var expected = lmnt.mask.replace(/#/g, "0"), input = expected;
			//input = input.replace(/\+/g, "");
			input = input.replace(/\(/g, "");
			input = input.replace(/\)/g, "");
			input = input.replace(/-/g, "");

			$(testmask).val(input);
			assert.equal(testmask.value, expected, "Result " + testmask.value);
		});
	});
});
