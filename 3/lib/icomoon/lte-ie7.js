/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-arrow-up-left' : '&#xe000;',
			'icon-arrow-up' : '&#xe011;',
			'icon-arrow-up-right' : '&#xe001;',
			'icon-arrow-right' : '&#xe002;',
			'icon-arrow-down-right' : '&#xe003;',
			'icon-arrow-down' : '&#xe004;',
			'icon-arrow-down-left' : '&#xe005;',
			'icon-arrow-left' : '&#xe006;',
			'icon-arrow-up-2' : '&#xe01b;',
			'icon-arrow-right-2' : '&#xe01c;',
			'icon-arrow-down-2' : '&#xe01d;',
			'icon-arrow-left-2' : '&#xe01e;',
			'icon-arrow-up-3' : '&#xe008;',
			'icon-arrow-right-3' : '&#xe009;',
			'icon-arrow-down-3' : '&#xe00a;',
			'icon-arrow-left-3' : '&#xe00b;',
			'icon-tab' : '&#xe007;',
			'icon-checkbox-checked' : '&#xe016;',
			'icon-checkbox-unchecked' : '&#xe017;',
			'icon-checkbox-partial' : '&#xe018;',
			'icon-radio-checked' : '&#xe019;',
			'icon-radio-unchecked' : '&#xe01a;',
			'icon-thumbs-up' : '&#xe00c;',
			'icon-thumbs-up-2' : '&#xe00d;',
			'icon-image' : '&#xe00e;',
			'icon-camera' : '&#xe00f;',
			'icon-eye' : '&#xe010;',
			'icon-eye-blocked' : '&#xe012;',
			'icon-fire' : '&#xe013;',
			'icon-lab' : '&#xe014;',
			'icon-share' : '&#xe015;',
			'icon-crop' : '&#xe01f;',
			'icon-scissors' : '&#xe020;',
			'icon-filter' : '&#xe021;',
			'icon-filter-2' : '&#xe022;',
			'icon-font' : '&#xe023;',
			'icon-loop' : '&#xe024;',
			'icon-loop-2' : '&#xe025;',
			'icon-shuffle' : '&#xe026;',
			'icon-loop-3' : '&#xe027;',
			'icon-enter' : '&#xe028;',
			'icon-exit' : '&#xe029;',
			'icon-plus' : '&#xe02a;',
			'icon-minus' : '&#xe02b;',
			'icon-spell-check' : '&#xe02c;',
			'icon-close' : '&#xe02d;',
			'icon-checkmark' : '&#xe02e;',
			'icon-spam' : '&#xe02f;',
			'icon-blocked' : '&#xe030;',
			'icon-cancel-circle' : '&#xe031;',
			'icon-checkmark-circle' : '&#xe032;',
			'icon-info' : '&#xe033;',
			'icon-info-2' : '&#xe034;',
			'icon-question' : '&#xe035;',
			'icon-notification' : '&#xe036;',
			'icon-warning' : '&#xe037;',
			'icon-eye-2' : '&#xe038;',
			'icon-heart-broken' : '&#xe039;',
			'icon-happy' : '&#xe03a;',
			'icon-happy-2' : '&#xe03b;',
			'icon-smiley' : '&#xe03c;',
			'icon-cool' : '&#xe03d;',
			'icon-download' : '&#xe03e;',
			'icon-upload' : '&#xe03f;',
			'icon-cloud-upload' : '&#xe040;',
			'icon-cloud-download' : '&#xe041;',
			'icon-earth' : '&#xe042;',
			'icon-truck' : '&#xe043;',
			'icon-airplane' : '&#xe044;',
			'icon-briefcase' : '&#xe045;',
			'icon-remove' : '&#xe046;',
			'icon-remove-2' : '&#xe047;',
			'icon-magnet' : '&#xe048;',
			'icon-hammer' : '&#xe049;',
			'icon-dashboard' : '&#xe04a;',
			'icon-cog' : '&#xe04b;',
			'icon-pie' : '&#xe04c;',
			'icon-bubbles' : '&#xe04d;',
			'icon-bubbles-2' : '&#xe04e;',
			'icon-user' : '&#xe04f;',
			'icon-user-2' : '&#xe050;',
			'icon-spinner' : '&#xe051;',
			'icon-spinner-2' : '&#xe052;',
			'icon-spinner-3' : '&#xe053;',
			'icon-undo' : '&#xe054;',
			'icon-redo' : '&#xe055;',
			'icon-forward' : '&#xe056;',
			'icon-reply' : '&#xe057;',
			'icon-box-add' : '&#xe058;',
			'icon-box-remove' : '&#xe059;',
			'icon-disk' : '&#xe05a;',
			'icon-history' : '&#xe05b;',
			'icon-compass' : '&#xe05c;',
			'icon-location' : '&#xe05d;',
			'icon-envelop' : '&#xe05e;',
			'icon-notebook' : '&#xe05f;',
			'icon-address-book' : '&#xe060;',
			'icon-phone' : '&#xe061;',
			'icon-folder-open' : '&#xe062;',
			'icon-home' : '&#xe063;',
			'icon-image-2' : '&#xe064;',
			'icon-music' : '&#xe065;',
			'icon-film' : '&#xe066;',
			'icon-book' : '&#xe067;',
			'icon-tags' : '&#xe068;',
			'icon-tag' : '&#xe069;',
			'icon-calendar' : '&#xe06a;',
			'icon-lock' : '&#xe06b;',
			'icon-key' : '&#xe06c;',
			'icon-food' : '&#xe06d;',
			'icon-rocket' : '&#xe06e;',
			'icon-switch' : '&#xe06f;',
			'icon-signup' : '&#xe070;',
			'icon-flag' : '&#xe071;',
			'icon-list' : '&#xe072;',
			'icon-list-2' : '&#xe073;',
			'icon-numbered-list' : '&#xe074;',
			'icon-volume-medium' : '&#xe075;',
			'icon-volume-mute' : '&#xe076;',
			'icon-volume-increase' : '&#xe077;',
			'icon-volume-decrease' : '&#xe078;',
			'icon-newspaper' : '&#xe079;',
			'icon-paste' : '&#xe07a;',
			'icon-file' : '&#xe07b;',
			'icon-books' : '&#xe07c;',
			'icon-file-2' : '&#xe07d;',
			'icon-droplet' : '&#xe07e;',
			'icon-key-2' : '&#xe07f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};